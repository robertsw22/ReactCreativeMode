import React from 'react';
import './styles.css';

function Unit2({ onClose }) {
const handleCloseClick = () => {
onClose();
};

return (
<div className="modal" onClick={handleCloseClick}>
<div className="modal-content" onClick={(e) => e.stopPropagation()}>
<h2 className="heading">Privacy Policy</h2>
<p className="text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum odio eu erat dictum, et fermentum magna auctor. Mauris rhoncus, orci in tristique gravida, purus arcu vehicula lorem, a pretium mauris lectus id velit. In non mollis quam, at finibus metus. Aliquam auctor enim at nisi dapibus, id dictum ante facilisis. Sed tristique sollicitudin nisi, in ultricies est elementum id. Aliquam sed consectetur leo, non tincidunt nisi. Fusce ultricies, nisl sit amet vehicula pretium, sapien dui dapibus urna, a accumsan est quam et ante. Nam interdum velit ut leo luctus, sit amet pulvinar lacus scelerisque.
</p>
<div className="modal-footer">
<button onClick={handleCloseClick} className="close-button">Close</button>
</div>
</div>
</div>
);
}

export default Unit2;