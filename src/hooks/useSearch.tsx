import React, { useState, useEffect } from "react";
import { searchImagesByKeyword } from "../services/requestHandler";

const useSearch = () => {
    
    const [images, setImages] = useState<string[]>();
	const [searchInput, setSearchInput] = useState<string>();
	const [loading, setLoading] = useState<boolean>(false);

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(prevValue => event.target.value);
	}

	const loadImages = async (): Promise<void> => {
			setLoading(true);
			const data = await searchImagesByKeyword(searchInput);
			setImages(data);
			setLoading(false);
	}

	useEffect(() => {
		!!searchInput && setTimeout(() => loadImages(), 1000);
	}, [searchInput]);

    return [images, loading, handleChange] as const;
}

export default useSearch;
