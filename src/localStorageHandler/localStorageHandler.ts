import { UrlsInterface } from "../types/types"

export const saveImagesIntoLocalStorage = (urlsArray: UrlsInterface[]): void => {
    window.sessionStorage.setItem('unsplashApiImages', JSON.stringify(urlsArray));
}

export const loadImagesFromLocalStorage = () => { 
    const data = window.sessionStorage.getItem('unsplashApiImages');
    return data;
}