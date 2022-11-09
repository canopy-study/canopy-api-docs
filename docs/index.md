# Canopy Study API Docs

## Authentication

Authentication to the API is performed via bearer auth. Use the `-H 'Authorization: Bearer <api-key>'`.

Any request to the API is required to be over HTTPS, and must include a valid API key in the authorization header.

## Errors

| Code | Reason |
| - | - |
| 400 (Bad Request) | The request was unacceptable, usually because of missing or invalid parameters. |
| 401 (Unauthorized) | Invalid API key provided. |
| 401 (Forbidden) | The API key doesn't have permissions for the requested resource. |
| 404 (Not Found) | The requested resource doesn't exist. |
| 429 (Too Many Requests) | Too many requests hit the API too quickly. Usually because there are too many questions being created in a short period of time. |
| 5XX (Server Error) | Something wen't wrong on our side. |

## Versioning

This describes the version of the API to use, and is given by the following header: `-H Canopy-Version: 2022-11-09`.

When backwards-incompatible changes are made, a new API version will be released.

The current version is "2022-11-09". We recommend using a version with all requests to prevent any erroneous errors.

## Content Type

There are two accepted content type formats that are allowed. If uploading a file, please use `-H 'Content-Type: multipart/form-data'`, otherwise `-H 'Content-Type: application/json'` is required.

## Creating Questions

`POST https://api.canopy.study/api/questions/`

Create questions automatically.

### Request body

`type` <Badge type="info" text="string" /> <Badge type="danger" text="Required" />

Accepts either `document`, `opentext`, or `website`. This is a descriptor for the type of input to create questions.

`number_requested_questions` Number | Optional | Defaults to 25.

A number between 1 and 50. This is the number of questions to create from the uploaded input.


#### Document Processing

`file` <Badge type="info" text="string" /> <Badge type="danger" text="Required" />

Required if `type` is `document`. The name of the pdf file to be processed. A max 10MB file is allowed.

`page_numbers` <Badge type="info" text="List[Number]" /> <Badge type="info" text="Optional" /> Defaults to null.

A list of page numbers that will be processed for questions. If null, it will process all pages.

##### Example

```bash
curl https://api.canopy.study/api/questions/ \
  -X POST \
  -H 'Authorization: Bearer <api-key>' \
  -H 'Canopy-Version: 2022-11-09' \
  -H 'Content-Type: multipart/form-data' \
  -F "type=document" -F "number_requested_questions=20" -F "file=@eutrophy.pdf" -F "page_numbers=1,2,3"
```

#### Opentext Processing

`text` <Badge type="info" text="string" /> <Badge type="danger" text="Required" />

Text to be processed.

##### Example

```bash
curl https://api.canopy.study/api/questions/ \
  -X POST \
  -H 'Authorization: Bearer <api-key>' \
  -H 'Canopy-Version: 2022-11-09' \
  -H 'Content-Type: application/json' \
  -d '{"type": "opentext", "number_requested_questions": 20, "text": "<text>"}'
```

#### Website Processing

`url` <Badge type="info" text="string" /> <Badge type="danger" text="Required" />

The URL of a website to be processed.

#### Example

```bash
curl https://api.canopy.study/api/questions/ \
  -X POST \
  -H 'Authorization: Bearer <api-key>' \
  -H 'Canopy-Version: 2022-11-09' \
  -H 'Content-Type: application/json' \
  -d '{"type": "website", "number_requested_questions": 20, "url": "https://en.wikipedia.org/wiki/Whale_fall"}'
```

### Response

A tracker object.

`id` <Badge type="info" text="string" />

The identifier for requesting updates on the progress of creating questions.

`progress` <Badge type="info" text="float" />

A number between `0.0` and `1.0`, representing the completion of creating questions. `1.0` represents a successful completion, where-as `-1.0` represents a failure to create questions.

## Tracking Question Creation

`GET https://api.canopy.study/api/pipeline-trackers/{id}/`

Get status updates on a specific request to create questions.

### Response

`id` <Badge type="info" text="string" />

The identifier for requesting updates on the progress of creating questions.

`progress` <Badge type="info" text="float" />

A number between `0.0` and `1.0`, representing the completion of creating questions. `1.0` represents a successful completion, where-as `-1.0` represents a failure to create questions.

#### Example

```bash
curl https://api.canopy.study/api/pipeline-trackers/BXxbr3aeup5Q2lHNWmM4/ \
  -X GET \
  -H 'Authorization: Bearer <api-key>' \
  -H 'Canopy-Version: 2022-11-09' \
  -H 'Content-Type: application/json'
```

## Get Created Questions

`GET "https://api.canopy.study/api/questions/?tracker={id}"`

### Query Parameters

`tracker` <Badge type="info" text="string" /> | <Badge type="danger" text="Required" />

The `id` of a tracker object.

#### Example

```bash
curl "https://api.canopy.study/api/questions/?tracker=iJjxDerhOSF7AlKpYZyw" \
  -X GET \
  -H 'Authorization: Bearer <api-key>' \
  -H 'Canopy-Version: 2022-11-09' \
  -H 'Content-Type: application/json'
```

### Response

A list of questions in the following format:

`id` <Badge type="info" text="string" />

The identifier of a question.

`question` <Badge type="info" text="string" />

The question to be asked.

`answer` <Badge type="info" text="string" />

The correct answer to the question.

`distractors` <Badge type="info" text="List[string]" />

A list of incorrect answers. Great for multiple choice questions.
