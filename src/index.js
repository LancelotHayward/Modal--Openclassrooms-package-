export function Modal({text, reference}) {
    return (
        <dialog ref={reference} onClick={e => reference.current.close()} className="modal">
            {text}
        </dialog>
    )
}