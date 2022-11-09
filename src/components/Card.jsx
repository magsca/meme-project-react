function Card ({title, description, imgPath}) {
    return (
    <>
    <h2>{title}</h2>
    <p>{description}</p>
    <img src={imgPath} width={350} />
    </>
    );
}
export default Card;