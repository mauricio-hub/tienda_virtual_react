import React from 'react'


export const LoginScreen = ({history}) => {

	const HandleLogin = ()=>{
	history.replace('/')
}



	return (
		<div>
			 <h1>login</h1>
			 <button type="button" className="btn btn-dark" onClick={HandleLogin}>Dark</button>
		</div>
	)
}

