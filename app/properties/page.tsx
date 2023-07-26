import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";

import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <EmptyState
        title="No está autorizado para ver esto"
        subtitle="Inicie sesión para hacerlo"
      />
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No tienes propiedades"
        subtitle="Agrega una propiedad para verla aquí"
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default PropertiesPage;
