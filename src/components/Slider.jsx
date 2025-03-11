import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Spinner from "./Spinner";

function Slider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listingsArray = [];

      querySnap.forEach((doc) => {
        listingsArray.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listingsArray);
      setLoading(false);
    };

    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!listings || listings.length === 0) {
    return <></>;
  }

  return (
    <>
      <p className="exploreHeading">Recommandé</p>

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
      >
        {listings.map(({ data, id }) => (
          <SwiperSlide
            key={id}
            onClick={() => navigate(`/category/${data.type}/${id}`)}
          >
            <div
              style={{
                backgroundImage: `url(${data.imgUrls?.[0] || ""})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "300px",
              }}
              className="swiperSlideDiv"
            >
              <p className="swiperSlideText">{data.name}</p>
              {(data.discountedPrice || data.regularPrice) && (
                <p className="swiperSlidePrice">
                  {"€ " +
                    (data.discountedPrice ?? data.regularPrice).toLocaleString(
                      "fr-FR",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    )}
                  {data.type === "rent" && " / mois"}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
