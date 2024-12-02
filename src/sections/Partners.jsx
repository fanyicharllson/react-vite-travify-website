const Partners = () => {
  const partners = [
    { id: 1, name: "Partner One", logo: "https://via.placeholder.com/150" },
    { id: 2, name: "Partner Two", logo: "https://via.placeholder.com/150" },
    { id: 3, name: "Partner Three", logo: "https://via.placeholder.com/150" },
    { id: 4, name: "Partner Four", logo: "https://via.placeholder.com/150" },
  ];
  return (
    <section className="py-12  max-sm:py-6 bg-gray-100 px-5">
      <div className="max-container text-center">
        <h1 className="heading">Our Partners</h1>
        <div className="grid max-sm:grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 pt-6">
            {partners.map((partner) => (
                <div key={partner.id} className="flex flex-col items-center space-y-4 bg-white rounded-md shadow-lg">
                    <img src={partner.logo} alt={partner.name} className="h-20 w-20 object-contain"/>
                    <p className="text-sm font-medium">{partner.name}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
