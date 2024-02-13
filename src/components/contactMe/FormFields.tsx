type FormFieldsProps = {
    nameField: string;
    replyToEmailField: string;
    messageField: string;
};

type FieldsProps = {
    props: FormFieldsProps;
}

export default function FormFields({ props }: FieldsProps) {

  const { nameField, replyToEmailField, messageField } = props;
    
  return (
    <div className='grid grid-cols-2 gap-4'>
      <InputType
        type="text"
        name="name"
        placeholder={nameField}
      />
      <InputType
        type="email"
        name="email"
        placeholder={replyToEmailField}
      />
      <textarea
        name="message"
        id="message"
        placeholder={messageField}
          required
        className="col-span-2 min-h-[100px] items-center px-1 py-2 rounded-md border border-solid-2 border-color"
      />
    </div>

  );
}

function InputType({type, name, placeholder}: {type: string, name: string, placeholder: string}) {
  return (
    // <div className="">
        <input
            type={type}
            name={name}
            id={name}
            // autoComplete="off"
            placeholder={placeholder}
            required
      className="col-span-1 flex items-center px-1 py-2 rounded-md border border-solid-2 border-color"
      />
    // </div>
    )
}