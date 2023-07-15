import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ index, icon, title, content }: any) => {
  return (
    <div
      key={index}
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt={"icon"}
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white tex-[18px]  leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite tex-[18px]  leading-[23px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => {
          const { icon, title, content } = feature;
          return (
            <FeatureCard index icon={icon} title={title} content={content} />
          );
        })}
      </div>
    </section>
  );
};

export default Business;
