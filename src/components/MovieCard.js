import { IMG_CDN_URL } from "../utils/constance"

const MovieCard = ({ posterPath })=> {
    return(
    <div>
        <div className="w-36 md:w-48 pr-4">
        <img src={IMG_CDN_URL+posterPath} alt="movie-poster" />
        </div>
    </div>)
};

export default MovieCard;