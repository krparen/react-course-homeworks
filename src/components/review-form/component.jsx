import styles from "./styles.module.scss";
import {useContext, useReducer} from "react";
import {UserContext} from "../../contexts/user.js";

export const ReviewForm = () => {

    const INITIAL_VALUE = {
        name: "",
        text: "",
        rating: 1
    };

    // action: {type: string, payload: any}

    const reducer = (state, {type, payload}) => {
        switch (type) {
            case "setName":
                return {
                    ...INITIAL_VALUE,
                    name: payload
                }
            case "setText":
                return {
                    ...state,
                    text: payload
                }
            case "setRating":
                return {
                    ...state,
                    rating: payload
                }
            default:
                return state;
        }
    }

    const [form, dispatch] = useReducer(reducer, INITIAL_VALUE, () => {});
    const {currentUser} = useContext(UserContext);

    return (
        <div>
            <h3>Обратная связь</h3>
            <form className={styles.root}>
                <div className={styles.field}>
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        disabled={true}
                        value={currentUser?.name}
                        onChange={ (event) =>
                             dispatch({type: "setName", payload: event.target.value})
                        }
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="text">Текст</label>
                    <input
                        type="text"
                        id="text"
                        value={form?.text}
                        onChange={ (event) =>
                            dispatch({type: "setText", payload: event.target.value})
                        }
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="rating">Рейтинг</label>
                    <input
                        type="number"
                        id="rating"
                        min={1}
                        max={5}
                        value={form?.rating}
                        onChange={ (event) =>
                            dispatch({type: "setRating", payload: Number(event.target.value)})
                        }
                    />
                </div>
            </form>
        </div>
    )
}