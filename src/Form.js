import React from "react";
class Form extends React.Component{
    constructor(){
        super();
    }
    render()
    {
        return(
            <center>
                <h1>CONTACT FORM</h1>
                <form>
                    <table>
                    <tr>
                        <th>NAME :</th>
                        <td><input type="text" name="name"></input></td>
                    </tr>
                    <tr>
                        <th>EMAIL :</th>
                        <td><input type="text" name="email"></input></td>
                    </tr>
                    <tr>
                        <th>PASSWORD :</th>
                        <td><input type="password" name="password"></input></td>
                    </tr>
                    <tr>
                        <th>GENDER :</th>
                        <td><input type="radio" name="name"></input>FEMALE<br></br>
                        <input type="radio" name="name"></input>MALE</td><br></br>
                    </tr>
                    <tr>
                        <th>HOBBY :</th>
                        <td><input type="checkbox" name="name"></input>GAMEING<br></br>
                        <input type="checkbox" name="name"></input>DROWING<br></br>
                        <input type="checkbox" name="name"></input>SWIMMING<br></br>
                        <input type="checkbox" name="name"></input>TRAVELLING<br></br>
                        <input type="checkbox" name="name"></input>READING</td>
                    </tr>
                    <tr>
                        <td><input type="button" name="submit" value="submit" className="btn"></input></td>
                    </tr>
                    </table>
                </form>
            </center>
        )
    }
}
export default Form;