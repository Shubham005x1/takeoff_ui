import { useEffect, useState } from "react";
import GroceryCard from "./GroceryCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [groceries, setGrocery] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getGroceries();
    }, []);
    const requestOptions = {
        method: 'GET',
        // headers: {
        //     'Access-Control-Allow-Origin': '*',// Set the Authorization header with the JWT token
        // },
    };
    async function getGroceries() {
        setLoading(true);
        let url = "https://us-central1-capstore-takeoff.cloudfunctions.net/ViewAllGroceryNoPagination?pageToken=" + nextPageToken;

        try {
            const data = await fetch(url, requestOptions);
            const json = await data.json();
            console.log(json)

            if (Array.isArray(json.groceries)) {
                setGrocery(prevGroceries => [...prevGroceries, ...json.groceries]);
            }
            setNextPageToken(json.nextPageToken);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }


    const loadMore = () => {
        getGroceries();
    };

    // CONDITIONAL RENDERING FOR INTERVIEW
    return (
        <div >
            {groceries.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="grocery-cards-container">
                    {groceries.map((e) => (
                        <Link to={"/GroceryDetails/" + e.id} key={e.id}>

                            < GroceryCard  {...e} />
                        </Link>
                    ))}

                </div>
            )
            }
            {
                nextPageToken && (
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="button"
                    >
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                )
            }
        </div >
    );
};

export default Body;