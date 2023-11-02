"use client";
import { useTranslation } from "@/app/i18n/client";
import { setLanguage } from "@/redux-toolkit/reducers/language";
import { RootState } from "@/redux-toolkit/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Language: React.FC<ILanguageProps> = ({ value }) => {

  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  const { i18n } = useTranslation(i18LangStatus);

  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const changeLng = (lng: string) => {
    dispatch(setLanguage(lng));
    const languageCodeRegex = /^\/[a-z]{2}(\/|$)/;
    const updatedPath = pathname.replace(languageCodeRegex, `/${lng}$1`);
    router.push(updatedPath);
  };

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      const language = pathSegments[0];
      if (language !== i18LangStatus) {
        dispatch(setLanguage(language));
      }
    }
  }, []);

  return (
    <li className="front-setting">
      <select
        value={i18LangStatus}
        onChange={(e) => {
          changeLng(e.target.value);
          i18n.changeLanguage(e.target.value);
        }}>
        {value?.option?.map((elem,index) => {
          return (
            <option key={index} value={elem.lang}>
              {elem.language}
            </option>
          );
        })}
      </select>
    </li>
  );
};

export default Language;
