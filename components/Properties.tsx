import React from 'react';

const Properties: React.FC = () => {
    const properties = [
        {
            id: 1,
            name: 'Luxury Apartment',
            location: 'New York City',
            price: '$1,200,000',
            image: 'luxury-apartment.jpg',
            description: 'A beautiful luxury apartment in the heart of the city.',
        },
        {
            id: 2,
            name: 'Cozy Cottage',
            location: 'The Hamptons',
            price: '$850,000',
            image: 'cozy-cottage.jpg',
            description: 'A cozy cottage perfect for weekend getaways.',
        },
        {
            id: 3,
            name: 'Modern Villa',
            location: 'Los Angeles',
            price: '$2,000,000',
            image: 'modern-villa.jpg',
            description: 'A stunning modern villa with ocean views.',
        }
    ];

    return (
        <div className="properties-showcase">
            <h1>Properties Showcase</h1>
            <div className="property-list">
                {properties.map(property => (
                    <div key={property.id} className="property-card">
                        <img src={property.image} alt={property.name} />
                        <h2>{property.name}</h2>
                        <p>{property.location}</p>
                        <p>{property.price}</p>
                        <p>{property.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Properties;
