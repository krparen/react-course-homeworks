import {Review} from "../review/component.jsx";

export const Reviews = ({reviews}) => {
    return (
        <div>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map(review => 
                    <li><Review review={review}></Review></li>
                )}
            </ul>
        </div>
    );
};