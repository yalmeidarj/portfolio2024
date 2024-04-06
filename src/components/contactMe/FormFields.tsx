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
    <div className='w-full flex flex-col gap-4 '>
      <div className='w-full flex flex-col sm:flex-row gap-2'>      
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
      </div>
      <textarea
        name="message"
        id="message"
        placeholder={messageField}
          required
        className="w-full col-span-2 min-h-[150px] items-center py-2 p-4 border-solid border border-custom-nav-light  dark:border-custom-title bg-custom-background-light dark:bg-custom-midBackground"
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
      className=" w-full flex items-center py-2 px-4 border-solid border-custom-nav-light border dark:border-custom-title bg-custom-background-light dark:bg-custom-midBackground"
      />
    // </div>
    )
}