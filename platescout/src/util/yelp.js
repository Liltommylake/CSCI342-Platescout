const SEARCH_PATH = "/api/yelp/businesses/search";

async function searchBusinesses(term, location, sortBy) {
    const params = new URLSearchParams({
        term,
        location,
        sort_by: sortBy,
        limit: "20",
    });

    const res = await fetch(`${SEARCH_PATH}?${params}`);

    if (!res.ok) {
        throw new Error(`Yelp request failed (${res.status})`);
    }

    // convert res to JSON
    const data = await res.json();

    // return the businesses array mapped into the format used by the 
    // business component.
    return data.businesses.map(business => ({
        imageSrc: business.image_url,
        name: business.name,
        address: `${business.location.address1} ${business.location.address2} ${business.location.address3}`,
        city: business.location.city,
        state: business.location.state,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count 
    }));
}

export default searchBusinesses;