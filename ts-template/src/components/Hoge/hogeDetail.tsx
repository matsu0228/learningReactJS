import * as React from "react";
import { HogeState } from "../../states/hogeState";
import { HogeActions } from "../../containers/hoge";

interface OwnProps {}

type HogeProps = OwnProps & HogeState & HogeActions;

class HogeComponent extends React.Component<HogeProps> {
  render() {
    const { name, email } = this.props;
    return (
      <div>
        <div className="field">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={e => this.props.updateName(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={e => this.props.updateEmail(e.target.value)}
          />
        </div>
        <button onClick={() => console.log(`save: ${name}, ${email}`)}>
          保存
        </button>
      </div>
    );
  }
}

export default HogeComponent;
