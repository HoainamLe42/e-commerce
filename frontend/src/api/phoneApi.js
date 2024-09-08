const BASE_URL = 'http://localhost:3000/phones';

export const fetchData = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(
            'There was a problem with the fetch operation:...!!!',
            error,
        );
        return null;
    }
};
