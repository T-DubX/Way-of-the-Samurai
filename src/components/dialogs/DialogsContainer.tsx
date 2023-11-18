import React, {FC} from 'react';
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


// type DialogsContainerPropsType = {
//     store: StoreType
// }

export const DialogsContainer: FC = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => (
                    <Dialogs
                        dialogsPage={store.getState().dialogsPage}
                        dispatch={store.dispatch}
                    />
                )

            }
        </StoreContext.Consumer>

    );
};

