import React from 'react';

type ProfileStatusProps = {
   status: string
}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
   state = {
      editMode: false
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
   }

   render() {
      return (
         <div>
            {this.state.editMode
               ? <div>
                  <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus/>
               </div>
               :
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
               </div>}
         </div>
      );
   }


};