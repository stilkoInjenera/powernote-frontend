import { Switch } from "@mui/material";
// import { useState } from "react";
import { useDispatch } from 'react-redux';
import { changeTheme } from "../../utils/themeSlice";
import { useSelector } from 'react-redux';
import { RootState } from "../../utils/store";

const ModeSwitch = () => {
    // const [themeDark, setThemeDark] = useState(false);

    const theme = useSelector((state: RootState) => state.theme.darkTheme);

    const dispatch = useDispatch()

    return (
        <Switch
            color="secondary"
            checked={theme}
            onClick={() => {
                // setThemeDark(!themeDark);
                dispatch(changeTheme())
            }}
            sx={{
                position: "relative",
                left: 12,
                height: "3rem",
                width: "4.3rem",
                "& .MuiSwitch-track": {
                    width: "10rem",
                    borderRadius: "1.5rem",
                },
                "& .MuiSwitch-switchBase": {
                    margin: 0.75,
                    "& .MuiSwitch-thumb": {
                        width: "1.2rem",
                        height: "1.2rem",
                    },
                },
                "&:before, &:after": {
                    content: "''",
                    position: "absolute",
                    top: "30%",
                    width: 20,
                    height: 20,
                },
                "&:before": {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path fill="1" d="M10 17q-2.917 0-4.958-2.042Q3 12.917 3 10q0-2.917 2.042-4.958Q7.083 3 10 3q.271 0 .531.021.261.021.531.062-.812.605-1.291 1.5-.479.896-.479 1.917 0 1.771 1.218 2.99 1.219 1.218 2.99 1.218 1.021 0 1.917-.479.895-.479 1.5-1.291.041.27.062.531.021.26.021.531 0 2.917-2.042 4.958Q12.917 17 10 17Z"/></svg>')`,
                    left: 13,
                },
                "&:after": {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path fill="1" d="M10 14q-1.667 0-2.833-1.167Q6 11.667 6 10q0-1.667 1.167-2.833Q8.333 6 10 6q1.667 0 2.833 1.167Q14 8.333 14 10q0 1.667-1.167 2.833Q11.667 14 10 14Zm-8.25-3.25q-.312 0-.531-.219Q1 10.312 1 10q0-.312.219-.531.219-.219.531-.219h2q.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Zm14.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219h2q.312 0 .531.219Q19 9.688 19 10q0 .312-.219.531-.219.219-.531.219ZM10 4.5q-.312 0-.531-.219-.219-.219-.219-.531v-2q0-.312.219-.531Q9.688 1 10 1q.312 0 .531.219.219.219.219.531v2q0 .312-.219.531-.219.219-.531.219ZM10 19q-.312 0-.531-.219-.219-.219-.219-.531v-2q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531v2q0 .312-.219.531Q10.312 19 10 19ZM5.042 6.104 4 5.042q-.229-.209-.229-.511 0-.302.229-.531.208-.229.521-.229.312 0 .521.229l1.062 1.042q.229.229.229.531 0 .302-.229.531-.208.229-.521.229-.312 0-.541-.229ZM14.958 16l-1.062-1.042q-.229-.229-.229-.531 0-.302.229-.531.208-.229.521-.229.312 0 .541.229L16 14.958q.229.209.229.511 0 .302-.229.531-.229.229-.521.229-.291 0-.521-.229Zm-1.062-9.896q-.229-.208-.229-.521 0-.312.229-.541L14.958 4q.23-.229.521-.219.292.011.521.219.229.229.229.521 0 .291-.229.521l-1.042 1.062q-.229.229-.531.229-.302 0-.531-.229ZM4 16q-.229-.208-.229-.521 0-.312.229-.521l1.042-1.062q.229-.208.531-.208.302 0 .531.208.229.229.219.531-.011.302-.219.531L5.042 16q-.209.229-.511.229-.302 0-.531-.229Z"/></svg>')`,
                    right: 14,
                },
            }}
        />
    );
};

export default ModeSwitch;
