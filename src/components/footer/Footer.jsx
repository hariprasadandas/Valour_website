import React from 'react'

function Footer() {
	return (
		<footer style={{background: '#09203a', color: '#fff', padding: '1.5rem 2rem', marginTop: '2rem'}}>
			<div style={{maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
				<div>
					<h3 style={{margin: 0}}>Valour Technologies</h3>
					<p style={{margin: '0.4rem 0'}}>Innovate. Secure. Scale.</p>
					<p style={{margin: 0}}>Email: <a href="mailto:contact@valourtech.com" style={{color: '#cfe7ff'}}>contact@valourtech.com</a></p>
					<p style={{margin: 0}}>Phone: +1 (555) 123-4567</p>
				</div>

				<div style={{textAlign: 'right'}}>
					<p style={{margin: 0}}>© {new Date().getFullYear()} Valour Technologies</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer

