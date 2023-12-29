import React, {ChangeEvent} from 'react';

type ProfileStatusProps = {
   status: string
   updateStatus: (status: string) => void
}

type StateType = {
   editMode: boolean
   status: string
}

export class ProfileStatus extends React.Component<ProfileStatusProps> {

   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatus(this.state.status)
   }

   onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps: ProfileStatusProps, prevState: StateType) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }

   }

   render() {
      return (
         <div>
            {this.state.editMode
               ? <div>
                  <input value={this.state.status} onBlur={this.deactivateEditMode}
                         onChange={this.onStatusChange}
                         autoFocus/>
               </div>
               :
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
               </div>}
         </div>
      );
   }


};
