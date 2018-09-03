import styled from "react-emotion";

interface IProps {
  fontColour: string;
  borderColour: string;
}

export const TagWrapper = styled.span<IProps>(
  {
    label: "tag-wrapper",
    display: "inline",
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 12,
    fontWeight: 700,
    padding: "5px 10px 5px 10px",
    marginBottom: 5
  },
  ({ fontColour, borderColour }) => ({
    color: fontColour,
    borderColor: borderColour
  })
);
