import React from "react";
import { ProfileUser } from "../../../profile/ProfileContainer";
import {
   Field,
   InjectedFormProps,
   WrappedFieldProps,
   reduxForm,
} from "redux-form";
import { FormControl } from "../../../common/formsControls/FormsControls";
import { Contact } from "../contact/Contact";
import s from "../ProdileInfo.module.css";

export type FormDataType = WrappedFieldProps & {
   lookingForAJob: boolean;
   aboutMe: string;
};

type Props = {
   profile: ProfileUser;
};

export const ProfileDataForm = ({
   handleSubmit,
   profile,
   error,
}: Props & InjectedFormProps<FormDataType, Props>) => {
   console.log(error)
   return (
      <form onSubmit={handleSubmit}>
         <button>save</button>

         {error && <div className={s.formSummaryError}>{error}</div>}

         <div>
            <b>Looking for a job</b>:{" "}
            {
               <Field
                  component={FormControl}
                  tagName={"input"}
                  type="checkbox"
                  name={"LookingForAJob"}
               />
            }
         </div>
         <div>
            <b>About me</b>:
            <Field
               component={FormControl}
               tagName={"textarea"}
               name={"aboutMe"}
            />
         </div>

         <div>
            <b>My professional skills</b>:
            <Field
               component={FormControl}
               tagName={"input"}
               name={"lookingForAJobDescription"}
            />
            {/* {profile.lookingForAJobDescription} */}
         </div>

         {profile.contacts && (
            <div className={s.contact}>
               <b>Contacts</b>:{" "}
               {Object.keys(profile.contacts).map((el) => {
                  return (
                     <div className={s.contact} key={el}>
                        {el}:{" "}
                        <Field
                           name={"contacts." + el}
                           component={FormControl}
                           tagName={"input"}
                           placeholder={el}
                        />
                     </div>
                     // <Contact
                     //    key={el}
                     //    contactTitle={el}
                     //    contactValue={
                     //       profile.contacts
                     //          ? profile.contacts[
                     //               el as keyof typeof profile.contacts
                     //            ]
                     //          : null
                     //    }
                     // />
                  );
               })}
            </div>
         )}
      </form>
   );
};

export const ProfileDataFormReduxForm = reduxForm<FormDataType, Props>({
   form: "profile",
})(ProfileDataForm);
