import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function DisabledExample() {
  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Button nya lagi rusak</Tooltip>}>
      <span className="d-inline-block">
        <Button disabled style={{ pointerEvents: 'none' }}>
          About us
        </Button>
      </span>
    </OverlayTrigger>
  );
}

export default DisabledExample;