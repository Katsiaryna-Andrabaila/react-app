import classes from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const classesArray = [classes.myModal];

    if (visible) {
        classesArray.push(classes.active)
    }

    return (
        <div className={classesArray.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;