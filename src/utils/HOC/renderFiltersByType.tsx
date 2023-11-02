import MemoizedCabOptionFilter from "@/components/cab/listing/filters/cab-option";
import MemorizedCabTypeFilter from "@/components/cab/listing/filters/cab-type";
import MemoizedCapacity from "@/components/cab/listing/filters/capacity";
import MemoizedAirlinesFilter from "@/components/flight/sidebar/filters/airlines-filter";
import MemoizedArriveFilterContent from "@/components/flight/sidebar/filters/arrive-filter";
import MemoizedDepartureFilter from "@/components/flight/sidebar/filters/departure-filter";
import MemoizedStopFilter from "@/components/flight/sidebar/filters/stop-filter";
import MemoizedDistrictFilter from "@/components/hotels/filters/district-filter";
import MemoizedFacilityFilter from "@/components/hotels/filters/facility-filter";
import HostLanguageFilter from "@/components/hotels/filters/host-language";
import PriceRange from "@/components/hotels/filters/price-range";
import MemoizedStarCategoryFilter from "@/components/hotels/filters/star-category";
import MemorizedCuisinesFilter from "@/components/restaurant/filters/cuisines-filter";
import MemoizedDeliveryFilter from "@/components/restaurant/filters/deliver-filter";
import MemoizedPopularFoodFilter from "@/components/restaurant/filters/popular-filter";
import MemoizedFlightFilter from "@/components/tour/listing/filters/flights";
import MemoizedTravelFilter from "@/components/tour/listing/filters/travel";
import MemoizedTripDurationFilter from "@/components/tour/listing/filters/trip-duration";

export function renderFiltersByType(type: string | undefined, minPrice: IPriceProps | null, maxPrice: IPriceProps | null) {
  switch (type) {
    case "hotel":
      return (
        <>
          <MemoizedDistrictFilter />
          <MemoizedFacilityFilter />
          <MemoizedStarCategoryFilter />
          <PriceRange min={minPrice?.price} max={maxPrice?.price} />
          <HostLanguageFilter />
        </>
      );
    case "tour":
      return (
        <>
          <MemoizedStarCategoryFilter />
          <MemoizedFlightFilter />
          <MemoizedTravelFilter />
          <PriceRange min={minPrice?.price} max={maxPrice?.price} />
          <MemoizedTripDurationFilter />
        </>
      );
    case "flight":
      return (
        <>
          <MemoizedStopFilter />
          <PriceRange min={minPrice?.price} max={maxPrice?.price} />
          <MemoizedAirlinesFilter />
          <MemoizedDepartureFilter />
          <MemoizedArriveFilterContent />
        </>
      );
    case "cab":
      return (
        <>
          <MemorizedCabTypeFilter />
          <MemoizedCabOptionFilter />
          <MemoizedStarCategoryFilter />
          <PriceRange min={minPrice?.price} max={maxPrice?.price} />
          <MemoizedCapacity />
        </>
      );
    case "restaurant":
      return (
        <>
          <MemoizedPopularFoodFilter />
          <MemorizedCuisinesFilter />
          <MemoizedStarCategoryFilter />
          <PriceRange min={minPrice?.price} max={maxPrice?.price} />
          <MemoizedDeliveryFilter />
        </>
      );
    default:
      return null;
  }
}
