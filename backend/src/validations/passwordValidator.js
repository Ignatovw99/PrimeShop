import passwordValidator from "password-validator";

export default new passwordValidator()
    .is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().symbols(1)
    .has().digits(2)
    .has().not().spaces();
