"use client"
import React, { FC, useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";

const RangeInputFields: FC<IPriceRangeFilterProps> = ({ min, max }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  const { priceStatus } = useSelector((state: RootState) => state.hotelFilterReducer);
  const [values, setValues] = useState<number[]>([]);
  const dispatch = useDispatch();
  const rtl = false;

  useEffect(() => {
    const newLocal = Object.values(priceStatus);
    setValues(newLocal);
  }, [priceStatus, max, min]);

  const STEP = 1;
  const priceHandle = (value: number[]) => {
    const sortedValues = value.sort((a, b) => a - b);
    setValues(sortedValues);
    dispatch({ type: "priceStatus", payload: { min: sortedValues[0], max: sortedValues[1] } });
  };

  return (
    <div className="wrapper">
      <div className="range-slider">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0em",
          }}>
          <Range
            values={values}
            step={STEP}
            min={min}
            max={max}
            rtl={rtl}
            onChange={(values) => {
              setValues(values);
            }}
            onFinalChange={(values) => {
              priceHandle(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}>
                <output style={{ marginTop: "30px" }}>
                  {symbol}
                  {(currencyValue * min).toFixed(0)}
                </output>
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: values,
                      colors: ["#ccc", "#ef3f3e", "#ccc"],
                      min: min,
                      max: max,
                    }),
                    alignSelf: "center",
                  }}>
                  {children}
                </div>
                <output style={{ marginTop: "30px" }}>
                  {symbol}
                  {(currencyValue * max).toFixed(0)}
                </output>
              </div>
            )}
            renderThumb={({ index, props }) => (
              <div
                {...props}
                key={index}
                style={{
                  ...props.style,
                  height: "12px",
                  width: "7px",
                  top: "15px",
                  borderRadius: "60px",
                  backgroundColor: "#ef3f3e",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}>
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "12px",
                    fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                    padding: "4px",
                    borderRadius: "4px",
                    backgroundColor: "#ef3f3e",
                  }}>
                  {symbol}
                  {(currencyValue * values[index]).toFixed(0)}
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeInputFields;
