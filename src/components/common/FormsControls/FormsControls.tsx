import React from 'react';
import {Field, WrappedFieldProps} from 'redux-form';
import {FieldValidatorType} from "../../../utils/validators/validators";
import s from './FormsControls.module.css'

export const FormControl = ({meta: {touched, error}, children}: any) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>{children}</div>
            { hasError && <span>{error}</span> }
        </div>
    );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} className={s.textArea}/></FormControl>
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} className={s.inputText}/></FormControl>
};

export const createField = (placeholder: string, name: string, validators: FieldValidatorType[], component: React.FC<WrappedFieldProps>, props = {}, text = '') => {
    return <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', color: 'black'}}>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}/>
        {text}
    </div>
}
