//NEWLY ADDED
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { tableCellClasses } from "@mui/material/TableCell";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";
import Modal from "@mui/material/Modal";

import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Switch from "@mui/material/Switch";

import FormControlLabel from "@mui/material/FormControlLabel";

import TableContainer from "@mui/material/TableContainer";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
// import makeStyles from "@mui/styles/makeStyles";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Tooltip from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import BarChartIcon from "@mui/icons-material/BarChart";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PolicyIcon from "@mui/icons-material/Policy";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MenuIcon from "@mui/icons-material/Menu";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import SecurityIcon from "@mui/icons-material/Security";
import ChatIcon from "@mui/icons-material/Chat";
import CachedIcon from "@mui/icons-material/Cached";
import TimelineIcon from "@mui/icons-material/Timeline";
import PrintIcon from "@mui/icons-material/Print";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  VisibilityIcon,
  CopyIcon as ContentCopyIcon,
  DeleteIcon,
  EditIcon,
} from "../commonIcon/index";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReorderIcon from "@mui/icons-material/Reorder";
import ReportIcon from "@mui/icons-material/Report";
import Policy from "@mui/icons-material/Policy";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCommentIcon from "@mui/icons-material/AddComment";
import PagesIcon from "@mui/icons-material/Pages";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ExploreIcon from "@mui/icons-material/Explore";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import debounce from "@mui/material/utils/debounce";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Card from "@mui/material/Card";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import InboxIcon from "@mui/icons-material/Inbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

export {
  EditIcon,
  ExpandMoreIcon,
  RemoveRedEyeIcon,
  DeleteIcon,
  RecordVoiceOverIcon,
  VisibilityOffIcon,
  VisibilityIcon,
  Policy,
  CachedIcon,
  BarChartIcon,
  TrendingUpIcon,
  BeenhereIcon,
  ContentCopyIcon,
  PrintIcon,
  TimelineIcon,
  AssignmentIcon,
  AddCircleOutlineIcon,
  AssignmentTurnedInIcon,
  DesignServicesIcon,
  CloudOffIcon,
  NoteAddIcon,
  AccountBalanceIcon,
  MonetizationOnIcon,
  AccountBoxIcon,
  ReceiptIcon,
  MenuIcon,
  ErrorOutlineIcon,
  FilterDramaIcon,
  SecurityIcon,
  ChatIcon,
  AssessmentIcon,
  ReorderIcon,
  ReportIcon,
  ExpandLessIcon,
  PolicyIcon,
  AddBoxIcon,
  ErrorIcon,
  CheckCircleIcon,
  AddCommentIcon,
  PagesIcon,
  LocalHospitalIcon,
  LocalPharmacyIcon,
  OfflinePinIcon,
  DescriptionIcon,
  LocalLibraryIcon,
  TableBody,
  TableCell,
  ExploreIcon,
  React,
  Box,
  TablePagination,
  Table,
  TableRow,
  TableHead,
  Typography,
  Paper,
  Grid,
  Select,
  Fade,
  Popper,
  Modal,
  InputLabel,
  FormControl,
  MenuItem,
  Snackbar,
  MuiAlert,
  Switch,
  FormControlLabel,
  TableContainer,
  TextField,
  IconButton,
  styled,
  makeStyles,
  ListItemIcon,
  Button,
  Tab,
  Tabs,
  tableCellClasses,
  SearchIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Checkbox,
  MessageIcon,
  VisibilityOff,
  debounce,
  Visibility,
  SystemUpdateAltIcon,
  PersonAdd,
  Container,
  Card,
  useEffect,
  MergeTypeIcon,
  RestartAltIcon,
  InboxIcon,
  ArrowDropDownIcon,
  ScreenSearchDesktopIcon,
  BuildCircleIcon,
};
