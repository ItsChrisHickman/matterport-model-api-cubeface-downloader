# Matterport Model API - Batch Cube face Downloader

Forked by Chris Hickman

Original URL: https://github.com/codewithkyle/batch-image-downloader

Batch download 2k/4k images from Matterport Model API responses using NodeJS.

Run the following query:

```graphql
query get4KImagery($modelId: ID!) {
  model(id:$modelId) {
    panoLocations {
      id
      label
      skybox(resolution: "2k") {
        children
      }
    }
  }
}
```

Variables:

```json
{
  "modelId": "CmywuJjmstU"
}
```

## Usage

1. Get started by cloning or downloading this repository.
2. Create a `data.json` file within the projects root directory.
3. Run the download command `npm run download`

If you wish to download 4k panoramas, be sure that you have a Business or
Enterprise Account and purchase the Advanced Imagery Pack using a mutation

```graphql
 mutation buyAdvancedImagePack($modelId: ID!){
  unlockModelBundle(
    id: $modelId,
    bundleId: "mp:imagery"
  ) {
    id
    name
    description
    availability
    assets {
      format
      id
      status
      validUntil
    }
  }
}
```

 Variables:

```json
 {
   "modelId" : ""
 }
 ```

## More Info

https://matterport.github.io/showcase-sdk/modelapi_ordering_addons.html#accessing-the-advanced-imagery-pack

## Convert Cube Faces -> Equirectangular:

https://github.com/disseminate/cube2equi
