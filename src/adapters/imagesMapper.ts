import { UrlsInterface } from "../types/types";

export const imagesMapper = (objectsArray: UrlsInterface[]): string[] => {
    const urlsArray = objectsArray.map(each => {
        return each.urls.regular;
    })
    return urlsArray;
}