import Button from "../../Components/Button";

export default function Test() {

    function handleClick() {
        alert("Clicou!");
    }
    
    return(
        <>
            <Button type={"Add"} text={"Teste"} onClick={handleClick} />
        </>
    )   
}