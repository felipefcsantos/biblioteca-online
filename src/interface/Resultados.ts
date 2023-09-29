export default interface Resultados{

      "id": string,
      "volumeInfo": {
        "title": string,
        "subtitle": string,
        "authors": string[],
        "publisher": string,
        "publishedDate": string,
        "description": string,
        "pageCount": number,
        "categories": string[],
        "imageLinks": {
          "smallThumbnail": string,
        },
        "language": string,
        "previewLink": string
      }    
}