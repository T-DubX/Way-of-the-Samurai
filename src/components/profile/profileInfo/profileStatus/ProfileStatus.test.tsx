import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";


describe('ProfileStatus component', () => {
   test('status from props should be in the state', () => {
      const component = create(<ProfileStatus status={'hello world'}/>);
      const instance = component.getInstance();
      instance !== null && expect(instance.instance.state.status).toBe('hello world');
   });
   test('should render a span element', () => {
      const component = create(<ProfileStatus status={'hello world'}/>);
      const instance = component.root;
      const span = instance.findByType('span');
      expect(span).toBeTruthy();
   });
})