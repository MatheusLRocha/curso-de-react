function Title(props) {
    // props.children pega o conteúdo dentro da tag, ex: <h1>conteúdo</h1>
    return <h1 className="title">{props.children}</h1>
}

export default Title;