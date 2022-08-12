import { Collapse } from "react-daisyui";

function Faq({ collapse, index }) {
  return (
    <Collapse
      id="faq"
      className="my-2 border-4 rounded-3xl border-slate-800 collapse-arrow"
    >
      <Collapse.Title className="text-xl font-medium bg-slate-700">
        {collapse.title}
      </Collapse.Title>
      <Collapse.Content>{collapse.content}</Collapse.Content>
    </Collapse>
  );
}

export default Faq;
