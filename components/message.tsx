import { atkins, poppins } from '../styles/fonts';
import Button from './button';

type AIFormProps = {
    text: string;
    setText: Function;
    onSubmit: (e: React.FormEvent) => Promise<void>;
  };

export default function AIForm(params: AIFormProps) {

  return (
    <form className={atkins.className} onSubmit={params.onSubmit}>
        <textarea
            className={"w-full min-h-[200px] max-h-[300px] p-3 rounded resize-y" + 
            " text-white placeholder-gray-500"+
            "!border-0 border-blue-gray-200 border-[#60c8fb] bg-[#0e0f1f]" +
            " px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 " +
            " transition-all placeholder:text-blue-gray-300 " + 
            "placeholder-shown:border placeholder-shown:border-blue-gray-200 " + 
            "placeholder-shown:border-t-blue-gray-200 border-2 " +
            " rounded-xl " + 
            " disabled:resize-none " + 
            " disabled:border-0 disabled:bg-blue-gray-50" }
            rows={2}
            placeholder={"Answer your stemling :D"}
            onChange={(e) => params.setText(e.target.value)}
            value={params.text}
            disabled={false}
        />

        {/* <div className="flex mt-4 w-[100%] justify-end">
            <Button text="submit" link="/"></Button>
        </div> */}
        <input type="submit" value="Submit" />
    </form>
  );
}
