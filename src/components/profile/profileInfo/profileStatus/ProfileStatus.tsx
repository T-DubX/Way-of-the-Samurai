import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type ProfileStatusProps = {
   status: string
   updateStatus: (status: string) => void
}

export const ProfileStatus: FC<ProfileStatusProps> = (props) => {
   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
   }

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <div>
         {editMode
            ? <div>
               <input value={status} onBlur={deactivateEditMode}
                      onChange={onStatusChange}
                      autoFocus/>
            </div>
            :
            <div>
               <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
            </div>}
      </div>
   );
};
