// external dependencies
import React from 'react';

/** This is a functional component for creating the footer of the application
 */
function Footer(props) {

	return (
		<div className="footer">
			<p>{ props.footerText }</p>
		</div>
	);
}
export default Footer;