import React from 'react';
import "./Page2.css";

const page2=()=>{
    return (
        <div className="Page2">
        <p>This is HTML Form</p>
        <form>
            <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="username">User Name: <input type="text" name="username" id="username" dafaultvalue="name"/></label>
            <label htmlFor="psw">Password<input type="password" name="psw" id="psw" /></label>
            <br />
            <label htmlFor="male"><input type="radio" name="gender" value="male" id="male" defaultChecked /> Male </label>
            <label  htmlFor="female"><input type="radio" name="gender" value="female" id="female" /> Female </label>
            <label  htmlFor="other"><input type="radio" name="gender" value="other" id="other"/> Other </label>

            <br />
            <input type="reset" />
            </fieldset>
            <br />
            <br />
            <fieldset>
                <legend> Belongings</legend>
                <input type="checkbox" name="vehicle1" value="Bike" /> I have a bike<br />
                <input type="checkbox" name="vehicle2" value="Car" /> I have a car 
                <br /><br />
                <select name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>

                </select>
                <br />
                <textarea name="message" rows="10" 
                cols="30"
                defaultValue="The cat was playing in the garden."></textarea>
            </fieldset>
            <br />
            <button type="button">Click Me!</button>
            <br />
            <input list="browsers" />
            <datalist id="browsers">
                <option value="Internet Explorer" />
                <option value="Fireforx" />
                <option value="Chrome" />
                <option value="Opers" />
                <option value="Safari" />
            </datalist>

        </form>
        </div>
    );
};
export default page2;