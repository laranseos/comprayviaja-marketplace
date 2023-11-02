import { FC } from "react";

interface ITabContentProps {
  tabId: string;
}
const BodyContent: FC<ITabContentProps> = ({ tabId }) => {
  return (
    <div>
      <div className="card">
        <div className="card-title">{tabId}</div>
        <div className="card-header">
          <h5>The standard Lorem Ipsum passage, used since the 1500s</h5>
        </div>
        <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
        </div>
        <div className="card-body">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
          modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>1914 translation by H. Rackham</h5>
        </div>
        <div className="card-body">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
          loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
        </div>
        <div className="card-body">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
        </div>
        <div className="card-body">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
          modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>1914 translation by H. Rackham</h5>
        </div>
        <div className="card-body">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
          loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
