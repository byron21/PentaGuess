import store from "@/store";
import router from "@/router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export async function Auth() {

	// let result = await _auth()

	// return result

	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
	apiKey: "AIzaSyDyaaJAqoYCeHna-4T7kPFNd1SFXhhyK3s",
	authDomain: "pentaguess.firebaseapp.com",
	projectId: "pentaguess",
	storageBucket: "pentaguess.appspot.com",
	messagingSenderId: "21880440146",
	appId: "1:21880440146:web:609eef4178454cdb53668b",
	measurementId: "G-LTFE1Q69GH"
	};
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
	return analytics;
}

// function _auth(): Promise<object> {

// 	return new Promise(function (resolve, reject) {


// 		// let xhr = new XMLHttpRequest()
// 		// xhr.open('POST', process.env.VUE_APP_API_URL+'/auth')
// 		// xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
// 		// xhr.onload = function () {
// 		// 	if (this.status >= 200 && this.status < 300) {
// 		// 		var json = {};
// 		// 		if ( typeof xhr.response != 'object' ) json = JSON.parse(xhr.response)
// 		// 		localStorage.setItem("token", json['token'])
// 		// 		resolve(JSON.parse(xhr.response));
// 		// 	}
// 		// 	else
// 		// 		reject();
// 		// }
// 		// xhr.onerror = function () {
// 		// 	reject({
// 		// 		status: this.status,
// 		// 		statusText: xhr.statusText,
// 		// 		errorCode: 500
// 		// 	});
// 		// }
// 		// xhr.send()






		
// 	})
// }
