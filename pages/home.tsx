import { useRouter } from "next/router";
import ComplicationsCard from "@/components/Common/ComplicationsCard.component";
import data from "../static/Dash.json";
import HomeChart from "@/components/Features/HomeChart.component";
import HomeDoughnutChart from "@/components/Features/HomeDoughnutChart.component";
import LearnMore from "@/components/Common/LearnMore.component";
import { useContext, useEffect, useState } from "react";
import {
  getComplications,
  getUserInformation,
  verifyUserToken,
} from "@/api/Calls";
import { UserContext } from "@/store/userContext.Context";
import { ReadingsContext } from "@/store/Readings.Context";
import Loader from "@/components/Common/Loader";
import { ComplicationsContext } from "@/store/ComplicationsContext";
import { AnalysisContext } from "@/store/Analyse.Context";
type complication = {
  heading: string;
  description: string;
  link: string;
};

type homePageDataType = {
  blood_sugar_distribution: { low: number; stable: number; high: number };
  blood_sugar_status: string;
  complications: complication[];
};

export default function Home() {
  const router = useRouter();
  const { values, setValues, clearValues } = useContext(UserContext);
  const { dat, clearDat } = useContext(ReadingsContext);
  const { complications, clearComplications } =
    useContext(ComplicationsContext);
  const { clearAnalysis } = useContext(AnalysisContext);

  const [ai, setAi] = useState<homePageDataType>({});
  const validateToken = async (token: string) => {
    try {
      const verifiedToken = await verifyUserToken(token);
      if (!verifiedToken) {
        clearAnalysis();
        clearDat();
        clearValues();
        clearComplications();
        router.push("/");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        clearAnalysis();
        clearDat();
        clearValues();
        clearComplications();
        router.push("/");
      }
    }
  };

  // const fetchComplications = async () => {
  //   try {
  //     const AiIntegration = await getComplications(values.id);
  //     //Ai sometimes returns incosistent data, by removing all the strings that are not in the object, we can get a consistent object that can be converted to JSON data.
  //     const jsonStart = AiIntegration.Response.indexOf("{");
  //     const jsonEnd = AiIntegration.Response.lastIndexOf("}");
  //     const jsonResponse = AiIntegration.Response.substring(
  //       jsonStart,
  //       jsonEnd + 1
  //     );
  //     const parsedData = JSON.parse(jsonResponse);
  //     setAi(parsedData);
  //   } catch (error) {
  //     console.error("Error fetching or parsing complications:", error);
  //   }
  // };

  // Replace this , this could possibly happen on the login or in the context.
  const fetchUserData = async () => {
    try {
      const userData = await getUserInformation(values.id);
      if (userData) {
        setValues((prevValues: any) => ({
          ...prevValues,
          weight: userData.weight,
          height: userData.height,
          type: userData.diabetes_type,
          sex: userData.sex,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let userToken = window.sessionStorage.getItem("token");
      if (userToken) {
        const tokenState = validateToken(userToken);
        try {
          fetchUserData();
        } catch (error) {
          console.log(error);
        }
      } else {
        clearAnalysis();
        clearDat();
        clearValues();
        clearComplications();
        router.push("/");
      }
    }
  }, []);

  useEffect(() => {
    // fetchComplications();
    console.log("comps", complications);
    console.log("====================================");
    console.log("User Readings: \n:", dat);
    console.log("====================================");
  }, [values.id]);

  return (
    <div className="bg-gradient-to-br from-grad1 via-grad2 to-grad3 flex flex-col h-[110vh] sm:h-screen w-[100%] sm:w-[80%] p-5">
      <HomeChart />
      {complications[0].blood_sugar_distribution?.low ? (
        <HomeDoughnutChart
          low={complications[0].blood_sugar_distribution?.low || 0}
          stable={complications[0].blood_sugar_distribution?.stable || 0}
          high={complications[0].blood_sugar_distribution?.high || 0}
          show={false}
        />
      ) : null}

      <div className="flex flex-row gap-x-[15px] h-[43vh] pt-3">
        {complications[0].blood_sugar_distribution?.low ? (
          <HomeDoughnutChart
            low={complications[0].blood_sugar_distribution?.low || 0}
            stable={complications[0].blood_sugar_distribution?.stable || 0}
            high={complications[0].blood_sugar_distribution?.high || 0}
            show={true}
          />
        ) : null}

        <div className="flex flex-col w-[100%] md:w-[35%] gap-y-[10px] overflow-scroll">
          <h5 className="text-m">{data.unstableHeading}</h5>

          {complications ? (
            complications[0].complications.map((complication) => (
              <ComplicationsCard {...complication} />
            ))
          ) : (
            <div className="flex flex-col w-[100%] h-[100%] gap-y-[10px] items-center justify-center">
              <Loader msg={`Analysing ${values.name}'s data`} />
            </div>
          )}
        </div>
        <LearnMore />
      </div>
    </div>
  );
}
