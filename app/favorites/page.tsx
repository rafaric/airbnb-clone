import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoriteClient from "./FavoriteClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No se han econtrado favoritos"
        subtitle="Al parecer no tienes favoritos para mostrar"
      />
    );
  }
  return <FavoriteClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
